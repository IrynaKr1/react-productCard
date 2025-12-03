import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {
    results: [
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Javier',
          last: 'Gardner',
        },
        location: {
          street: {
            number: 2222,
            name: 'Thornridge Cir',
          },
          city: 'Garden Grove',
          state: 'Michigan',
          country: 'United States',
          postcode: 13929,
          coordinates: {
            latitude: '88.6281',
            longitude: '-65.1024',
          },
          timezone: {
            offset: '-7:00',
            description: 'Mountain Time (US & Canada)',
          },
        },
        email: 'javier.gardner@example.com',
        login: {
          uuid: '7423d560-31a4-4a1b-80d6-026ded14bb27',
          username: 'ticklishgorilla131',
          password: '1941',
          salt: 'ofNsOgUr',
          md5: 'b2a75191861c690c5685fbe13b828213',
          sha1: '780e50ebeb4ff6285da4249fffc83eab7924d0f3',
          sha256:
            '7e7a2822e5c6b491a34ffdbc8716cd42dc4e02a98c27764c83d44045f9f4495a',
        },
        dob: {
          date: '1953-01-22T12:10:57.179Z',
          age: 72,
        },
        registered: {
          date: '2010-08-08T00:11:19.680Z',
          age: 15,
        },
        phone: '(980) 477-1486',
        cell: '(611) 345-5176',
        id: {
          name: 'SSN',
          value: '846-37-6377',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/86.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/86.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/86.jpg',
        },
        nat: 'US',
      },
      {
        gender: 'female',
        name: {
          title: 'Ms',
          first: 'Kenzi',
          last: 'Berry',
        },
        location: {
          street: {
            number: 6818,
            name: 'Edwards Rd',
          },
          city: 'Rockhampton',
          state: 'South Australia',
          country: 'Australia',
          postcode: 1995,
          coordinates: {
            latitude: '57.2974',
            longitude: '42.6279',
          },
          timezone: {
            offset: '+7:00',
            description: 'Bangkok, Hanoi, Jakarta',
          },
        },
        email: 'kenzi.berry@example.com',
        login: {
          uuid: '83136992-cad7-494c-95cc-0f81fca3b8d5',
          username: 'yellowleopard426',
          password: 'styles',
          salt: 'vUIAhlZ3',
          md5: '2e0312e02b7704b1840d3804905af20b',
          sha1: 'c14f22b2cc880615257f17d10131caf8f9b75d98',
          sha256:
            '59002c7a7c72e287f24730352e98ab425003d629a992942e463bf8af78d60ca1',
        },
        dob: {
          date: '1970-11-28T05:11:30.953Z',
          age: 55,
        },
        registered: {
          date: '2008-07-29T06:51:53.397Z',
          age: 17,
        },
        phone: '02-2297-8711',
        cell: '0455-318-960',
        id: {
          name: 'TFN',
          value: '273751934',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/24.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/24.jpg',
        },
        nat: 'AU',
      },
    ],
  },

  isFetching: false,
  error: null,
};



const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {},
});

const { reducer, actions } = usersSlice;

export default reducer;
