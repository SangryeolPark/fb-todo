import tw from 'twin.macro';

const Container = tw.form`flex pt-2`;

const Input = tw.input`w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow`;

const Submit = tw.input`p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400`;

export { Container, Input, Submit };
