// import AxiosInstance from '@/lib/axiosInstance'; // Import the custom axios instance

// const BASE_URL = API_CONFIG.getBaseUrl();

// export const createJobApi = {
//   getNoticeById: async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await AxiosInstance.get(`${BASE_URL}/getnoticelistbynoticeid/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   getJobList: async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await AxiosInstance.get(`${BASE_URL}/getJobList`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   getSkills: async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await AxiosInstance.get(`${BASE_URL}/getSkillList`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   getJobRoles: async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await AxiosInstance.get(`${BASE_URL}/getAllJobRoles`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   getInterviewRounds: async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await AxiosInstance.get(`${BASE_URL}/getInterviewRoundlist`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   getInterviewRoundsByRole: async (jobRole) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await AxiosInstance.get(`${BASE_URL}/interviewRounds/${jobRole}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   saveJob: async (jobData) => {
//     try {
//       const token = localStorage.getItem('token');
//       const formattedData = {
//         ...jobData,
//         skills: Array.isArray(jobData.skills) ? jobData.skills : [jobData.skills],
//         interviewRounds: Array.isArray(jobData.interviewRounds) ? jobData.interviewRounds : [jobData.interviewRounds]
//       };

//       const response = await AxiosInstance.post(`${BASE_URL}/savejob`, formattedData, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   updateJob: async (jobId, jobData) => {
//     try {
//       const token = localStorage.getItem('token');
      
//       const formattedData = {
//         ...jobData,
//         skills: Array.isArray(jobData.skills) ? jobData.skills : [jobData.skills],
//         interviewRounds: Array.isArray(jobData.interviewRounds) ? jobData.interviewRounds : []
//       };

//       console.log('Sending update with formatted data:', formattedData);

//       const response = await AxiosInstance.put(`${BASE_URL}/updatejob/${jobId}`, formattedData, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error updating job:', error.response?.data || error.message);
//       throw error.response?.data || error.message;
//     }
//   },

//   deleteJob: async (jobId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await AxiosInstance.delete(`${BASE_URL}/deletejob/${jobId}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   updateIsCreated: async (jobId) => {
//     try {
//       const token = localStorage.getItem('token');
//       console.log('Making updateIsCreated API call for jobId:', jobId);

//       const response = await AxiosInstance.patch(`${BASE_URL}/updateiscreated/${jobId}`, {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('updateIsCreated API raw response:', response);

//       if (response.status === 200) {
//         const result = {
//           success: true,
//           data: response.data
//         };
//         console.log('updateIsCreated API formatted response:', result);
//         return result;
//       } else {
//         console.error('updateIsCreated API failed with status:', response.status);
//         throw new Error('Failed to update isCreated status');
//       }
//     } catch (error) {
//       console.error('Error in updateIsCreated API:', error);
//       throw error.response?.data || error.message;
//     }
//   },

//   getnoticelistbynoticeid: async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await AxiosInstance.post(`${BASE_URL}/getnoticelistbynoticeid/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
//       return response.data.data;
//     } catch (error) {
//       console.error('Error fetching notice:', error);
//       throw error;
//     }
//   },

//   createJob: async (jobData) => {
//     try {
//       const token = localStorage.getItem('token');
//       console.log('Making createJob API call with data:', jobData);
//       const response = await AxiosInstance.post(`${BASE_URL}/savejob`, jobData, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
//       console.log('Create job API response:', response.data);
//       return { success: true, data: response.data };
//     } catch (error) {
//       console.error('Error in createJob API:', error);
//       throw error.response?.data || error.message;
//     }
//   }
// };
