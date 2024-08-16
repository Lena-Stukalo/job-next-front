export interface IJobType{
    job_id:string
employer_name:string
job_publisher:string
job_employment_type:string
job_title:string
job_apply_link:string
job_apply_is_direct:boolean
job_apply_quality_score:number
apply_options:JobOptions[]
job_description:string
job_is_remote:boolean
job_posted_at_timestamp:number
job_posted_at_datetime_utc:string
job_city:string
job_state:string
job_country:string
}
export interface JobOptions{
    publisher:string
apply_link:string
is_direct:boolean
}