interface Options {
    [key: number]: string | number | boolean;
    timeout: number;
}
  
const options: Options = {
    1: 1000,
    2: 'The request timed out!',
    3: false,
    timeout: 0
};