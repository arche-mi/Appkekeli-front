// store.js
import {create} from 'zustand';

const useStore = create((set) => ({
  userChoices: [],
  addChoice: (choice) =>{
    console.log(choice);
   set((state) => ({
    userChoices: [...state.userChoices, choice],
  }))}
}));

export default useStore;
