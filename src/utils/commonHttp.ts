import axios from 'axios';

export const config = {
  headers: {
    Authorization: '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

type Data = {
  menuItem: string[];
  createdAt: string;
  globalType: string;
  id: string;
  updatedAt: string;
  _status: string;
};

type GetUsersResponse = {
  data: Data[];
};

export const commonHttp = async (props: any) => {
  try {
    console.log(props);
    const res: GetUsersResponse = await axios({
      method: props.method,
      url: `${props.url}`,
      // headers: config.headers,
      withCredentials: false,
    });
    // const {data} = await axios<GetUsersResponse>({method: props.method, url: props.url , headers : config.headers})
    console.log('API raw res---------------->', res?.data);

    return res?.data;
  } catch (error: any) {
    console.log('common http error--------------->', error);
    //   console.log('common http error--------------->', error, error.response);
    return error?.response;
  }
};
