import { Worker } from 'bullmq';
import { OpenAIEmbeddings } from '@langchain/openai';
import { QdrantVectorStore } from '@langchain/qdrant';
import { Document } from '@langchain/core/documents';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { CharacterTextSplitter } from '@langchain/textsplitters';

const worker = new Worker(
  'file-upload-queue',
  async (job) => {
    try {
      console.log(`Job:`, job.data);
      const data = JSON.parse(job.data);
      /*
      Path: data.path
      read the pdf from path,
      chunk the pdf,
      call the openai embedding model for every chunk,
      store the chunk in qdrant db
      */

      // Load the PDF
      const loader = new PDFLoader(data.path);
      const docs = await loader.load();
      console.log('Loaded docs:', docs);

      if (!docs.length) {
        throw new Error('No documents loaded from PDF.');
      }

      const embeddings = new OpenAIEmbeddings({
        model: 'text-embedding-3-small',
        apiKey: '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',
      });

      const vectorStore = await QdrantVectorStore.fromExistingCollection(
        embeddings,
        {
          url: 'http://localhost:6333',
          collectionName: 'langchainjs-testing',
        }
      );
      await vectorStore.addDocuments(docs);
      console.log(`All docs are added to vector store`);
    } catch (err) {
      console.error('Error processing job:', err);
    }
  },
  {
    concurrency: 100,
    connection: {
      host: 'localhost',
      port: '6379',
    },
  }
);