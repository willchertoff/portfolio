const initialState = {
  name: 'Will Chertoff',
  subTitle: 'Web Developer',
  specialties: [
    { name: 'Node' },
    { name: 'React' },
    { name: 'Redux' },
    { name: 'Webpack' },
    { name: 'Mongo' },
    { name: 'SASS' },
  ],
};

export default function staticData(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
