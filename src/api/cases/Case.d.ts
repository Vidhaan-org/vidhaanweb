export interface Case {
  cnr_number: string
  case_type: string
  filling_number: string
  registration_number: string
  petitioner: [
    {
      id: string
      petitioner_type: string
      petitioner_name: string
      petitioner_age: string
      petitioner_state: string
      petitioner_address: string
      petitioner_country: string
      petitioner_mobile: string
      petitioner_department: string
      petitioner_city: string
      petitioner_email: string
      petitioner_pin: string
      petitioner_district: string
      petitioner_total_petition: string
    }
  ]
  respondent: [
    {
      id: string
      respondent_name: string
      respondent_relation: string
      respondent_father: string
      respondent_gender: string
      respondent_address: ""
      respondent_country: string
      petitioner_city: string
      petitioner_email: string
    }
  ]
  act: [
    {
      id: string
      act_title: string
      act_rule: string
      section: string
      rule_no: string
      act_belong_to: string
    }
  ]
  advocate: [
    {
      id: string
      advocate_name: string
      advocate_number: string
      advocate_year: string
      advocate_mobile: string
      advocate_email_id: string
      advocate_type: string
    }
  ]
  ia: [
    {
      id: string
      ia_number: string
      filing_date: string
      next_date: string
      ia_status: string
      party: string
    }
  ]
  history: [
    {
      id: string
      cause_list_type: string
      hearing_date: string
      purpose_of_hearing: string
      judge: string
    },
    {
      id: string
      cause_list_type: string
      hearing_date: string
      purpose_of_hearing: string
      judge: string
    }
  ]
  order: [
    {
      id: string
      order_date: string
      judge: string
    }
  ]
  objection: [
    {
      id: string
      scrutiny_date: string
      objection: string
      compliance_date: string
      reciept_date: string
    }
  ]
  document: [
    {
      id: string
      document_no: string
      recieving_date: string
      document: string
      filed_by: string
      advocate: string
    }
  ]
}
