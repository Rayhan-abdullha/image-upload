import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';
import { wait } from './../utils/utils';
import MainLayout from '../layout/MainLayout';
const Home = () => {
  const [files, setFiles] = useState({ file1: null, file2: null, file3: null, file4: null });
  const [loading, setLoading] = useState(false);

  // Handle file input change
  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!files.file1 || !files.file2 || !files.file3 || !files.file4) {
        toast.error('Please select all four files.');
        return;
    }
    const formData = new FormData();
    for (const key in files) {
        if (files[key]) formData.append(key, files[key]);
    }

    try {
      setLoading(true)
      await wait(2000)
        const upload = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
        const res = await upload.json();
        if (res.status === 200) {
            toast.success('Files uploaded successfully!');
        } else {
            toast.error('Failed to upload files');
        }
    } catch (error) {
      setLoading(false)
      toast.error('Failed to upload files');
    } finally {
      setLoading(false)
    }
  };


  return (
      <MainLayout>
        <Toaster/>
        <div className="min-h-[80vh] bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Upload Files</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className=''>
                    <label htmlFor="file1" className="block text-gray-700">Choose first file:</label>
                    <div className='flex items-center'>
                    <input
                        type="file"
                        id="file1"
                        name="file1"
                        onChange={handleFileChange}
                        className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {loading && <LoadingSpinner className='h-4 w-4' />}
                    </div>
                </div>

                <div>
                    <label htmlFor="file2" className="block text-gray-700">Choose second file:</label>
                    <div className='flex items-center'>
                    <input
                        type="file"
                        id="file2"
                        name="file2"
                        onChange={handleFileChange}
                        className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {loading && <LoadingSpinner className='h-4 w-4' />}
                </div>
                </div>

                <div>
                    <label htmlFor="file3" className="block text-gray-700">Choose third file:</label>
                    <div className='flex items-center'>
                    <input
                        type="file"
                        id="file3"
                        name="file3"
                        onChange={handleFileChange}
                        className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {loading && <LoadingSpinner className='h-4 w-4' />}
                    </div>
                </div>

                <div>
                    <label htmlFor="file4" className="block text-gray-700">Choose fourth file:</label>
                    <div className='flex items-center'>
                    <input
                        type="file"
                        id="file4"
                        name="file4"
                        onChange={handleFileChange}
                        className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {loading && <LoadingSpinner className='h-4 w-4' />}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300"
                >
                    {loading ? 'Uploading...' : 'Upload Files'}
                </button>
                </form>
            </div>
        </div>
    </MainLayout>
  );
};

export default Home;
