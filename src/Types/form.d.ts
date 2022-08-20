export interface PetitionFormFields {
  case_type: string
  case_category: string
  special_category: string
  court: string
  state: string
  district: string
  petitioner: Petitioner
  respondent: Respondent
  act: Act
}

interface Petitioner {
  petitioner_type: string
  petitioner_name: string
  petitioner_age: number
  petitioner_state: string
  petitioner_address: string
  petitioner_country: string
  petitioner_mobile: number
  petitioner_department: string
  petitioner_city: string
  petitioner_email: string
  petitioner_pin: number
  petitioner_district: string
  petitioner_total_petition: number
}

interface Respondent {
  respondent_name: string
  respondent_relation: string
  respondent_father: string
  respondent_gender: string
  respondent_address: string
  respondent_country: string
  respondent_city: string
  respondent_email: string
}
interface Act {
  act_title: string
  act_rule: string
  section: string
  rule_no: string
  act_belong_to: "state" | "genral"
}
