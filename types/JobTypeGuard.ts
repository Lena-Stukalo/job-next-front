import { IJobType, JobOptions } from "./jobType";

export function isIJobType(obj: any): obj is IJobType {
    return typeof obj === 'object' &&
      typeof obj.job_id === 'string' &&
      typeof obj.employer_name === 'string' &&
      typeof obj.job_publisher === 'string' &&
      typeof obj.job_employment_type === 'string' &&
      typeof obj.job_title === 'string' &&
      typeof obj.job_apply_link === 'string' &&
      typeof obj.job_apply_is_direct === 'boolean' &&
      typeof obj.job_apply_quality_score === 'number' &&
      Array.isArray(obj.apply_options) && obj.apply_options.every(isJobOptions) &&
      typeof obj.job_description === 'string' &&
      typeof obj.job_is_remote === 'boolean' &&
      typeof obj.job_posted_at_timestamp === 'number' &&
      typeof obj.job_posted_at_datetime_utc === 'string' &&
      typeof obj.job_city === 'string' &&
      typeof obj.job_state === 'string' &&
      typeof obj.job_country === 'string'
    
  }
  
 export function isJobOptions(obj: any): obj is JobOptions {
    return typeof obj === 'object' &&
      typeof obj.publisher === 'string' &&
      typeof obj.apply_link === 'string' &&
      typeof obj.is_direct === 'boolean';
  }
  export function validateJobType(obj: any): IJobType | false {
    if (isIJobType(obj)) {
      return obj;
    } else {
      return false;
    }
  }
  