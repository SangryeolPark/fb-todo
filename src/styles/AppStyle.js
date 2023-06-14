import tw from 'twin.macro';

const Screen = tw.div`flex items-center justify-center w-screen h-screen bg-blue-300`;

const Container = tw.div`w-4/5 p-6 bg-white rounded-[6px] shadow`;

const TitleBar = tw.div`flex justify-between mb-3`;

const Title = tw.h1`text-center w-full text-2xl text-red-600 font-semibold`;

export { Screen, Container, TitleBar, Title };
