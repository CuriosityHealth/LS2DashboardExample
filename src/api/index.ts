import axios, {
    // AxiosRequestConfig,
    // AxiosError,
    AxiosResponse,
    // AxiosInstance,
    // AxiosAdapter,
    // Cancel,
    // CancelToken,
    // CancelTokenSource,
    // Canceler
  } from 'axios';

function printResponse(response: AxiosResponse<any>) {
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
};

export function signIn(baseURL: string, studyID: string, username: string, password: string): Promise<string> {
    const url: string = baseURL + '/researcher_api/token-auth';

    const body = {
        password,
        study_id: studyID,
        username
    }

    console.log(url);

    return axios.post(url, body).then((response) => {
        printResponse(response);
        return response.data.token;
    });

}

// class LS2ResearcherAPIClient {

//     public static signIn(baseURL: string, studyID: string, username: string, password: string): Promise<string> {
//         const url: string = baseURL + '/researcher_api/token-auth';

//         const body = {
//             password,
//             study_id: studyID,
//             username
//         }

//         console.log(url);

//         return axios.post(url, body).then((response) => {
//             LS2ResearcherAPIClient.printResponse(response);
//             return response.data.token;
//         });

//     }

//     private static printResponse = (response: AxiosResponse<any>) => {
//         // console.log(response.data);
//         // console.log(response.status);
//         // console.log(response.statusText);
//         // console.log(response.headers);
//         // console.log(response.config);
//     };

    

//     // public baseURL: string;
//     // public studyID: string;

//     // constructor(baseURL: string, studyID: string) {
//     //     this.baseURL = baseURL;
//     //     this.studyID = studyID;
//     // }

//     // public signIn(username: string, password: string): Promise<string> {
//     //     const url: string = this.baseURL + '/researcher_api/token-auth';

//     //     const body = {
//     //         password,
//     //         study_id: this.studyID,
//     //         username
//     //     }

//     //     return axios.post(url, body).then((response) => {

//     //         LS2ResearcherAPIClient.printResponse(response);

//     //         return "string";
//     //     });

//     // }

// }

// export default LS2ResearcherAPIClient;