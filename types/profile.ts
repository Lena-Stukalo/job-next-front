export interface RegisterFormValues {
    name: string;
    email: string;
    job_Desired: string;
    about: string;
  }
  
  export function isRegisterFormValues(obj: any): obj is RegisterFormValues {
    return typeof obj === 'object' &&
      obj !== null &&
      typeof obj.name === 'string' &&
      typeof obj.email === 'string' &&
      typeof obj.job_Desired === 'string' &&
      typeof obj.about === 'string';
  }
  
  export function validateRegisterFormValues(obj: any): RegisterFormValues | false {
    if (isRegisterFormValues(obj)) {
      return obj;
    } else {
      return false;
    }
  }