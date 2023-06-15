import tw from 'twin.macro';

const Screen = tw.div`flex items-center justify-center w-screen h-screen bg-blue-300`;

const Container = tw.div`w-4/5 p-6 bg-white rounded-[6px] shadow`;

const TitleBar = tw.div`flex justify-between mb-3`;

const Title = tw.h1`text-center text-2xl text-red-600 font-semibold`;

const DeleteAllButton = tw.button`p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400`;

export { Screen, Container, TitleBar, Title, DeleteAllButton };
