export type Course = {
  name: string
  minimumGrade: string
  examiningBody: string
  duration: string
}

export type CourseCategory = {
  title: string
  courses: Course[]
}

const cdacc_exam_body = 'TVET/CDACC'

export const coursesData: CourseCategory[] = [
  {
    title: 'Electrical and Electronics Engineering',
    courses: [
      { name: 'Electrical Engineering Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Electrical Engineering Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Electrical Installation Technology Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Electrical Installation Technology Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' }
    ]
  },
  {
    title: 'Mechanical and Automotive Engineering',
    courses: [
      { name: 'Automotive Engineering Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Automotive Technician Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Motor Vehicle Mechanic Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Motor Vehicle Mechanic Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' }
    ]
  },
  {
    title: 'Civil and Building Engineering',
    courses: [
      { name: 'Building Technician Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Civil Engineering Technology Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Water Engineering Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Building Technician Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Building Technology Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Masonry Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Plumbing Technology Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Plumbing Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Plumbing Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' }
    ]
  },
  {
    title: 'Applied Sciences',
    courses: [
      { name: 'Applied Biology Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Analytical Chemistry Technology Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Science Laboratory Technology Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Food Technology Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Food Technology Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Science Laboratory Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' }
    ]
  },
  {
    title: 'Agriculture',
    courses: [
      { name: 'Agricultural Extension Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Agricultural Extension Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'General Agriculture Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' }
    ]
  },
  {
    title: 'Hospitality and Fashion',
    courses: [
      { name: 'Food and Production (Culinary Arts) Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Food and Production (Culinary Arts) Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Food and Production (Culinary Arts) Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Food and Production (Culinary Arts) Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Fashion Design Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Fashion Design Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Fashion Design Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Fashion Design Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Cosmetology Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Cosmetology Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Cosmetology Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Cosmetology Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' }
    ]
  },
  {
    title: 'ICT and Records',
    courses: [
      { name: 'ICT Technician Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'ICT Technician Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'ICT Technician Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'ICT Technician Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Records & Archives Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Records & Archives Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Records & Archives Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Records & Archives Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' }
    ]
  },
  {
    title: 'Business and Administration',
    courses: [
      { name: 'Office Administration Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Office Administration Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Office Administration Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Social Work and Community Development Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Social Work and Community Development Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Social Work and Community Development Level 4', minimumGrade: 'D+', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Supply Chain Management Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Business Management Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Store Keeping Level 3', minimumGrade: 'D', examiningBody: cdacc_exam_body, duration: '2 years' },
      { name: 'Human Resource Management Level 6', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' },
      { name: 'Human Resource Management Level 5', minimumGrade: 'C-', examiningBody: cdacc_exam_body, duration: '3 years' }
    ]
  },
  {
    title: 'Short and Skills Courses',
    courses: [
      { name: 'Computer Packages (12 Packages)', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '1 month' },
      { name: 'Web Design', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '6 weeks' },
      { name: 'Accounting Packages (Quick Books)', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '8 weeks' },
      { name: 'Autocad/Archicad', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '6 weeks' },
      { name: 'Fashion Dress Making', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '3 months' },
      { name: 'Basic Plumbing and Pipefitting', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '8 weeks' },
      { name: 'Basic Tilling', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '6 weeks' },
      { name: 'Basic Masonry & Bricklaying', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '8 weeks' },
      { name: 'Construction Site Safety and Management', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '4 weeks' },
      { name: 'Cake Baking and Pastry Skills', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '6 weeks' },
      { name: 'Bartendering and Mixology Skills', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '4 weeks' },
      { name: 'House Keeping and Accommodation Skills', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '4 weeks' },
      { name: 'Basic First Aid and CPR', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '2 weeks' },
      { name: 'Beekeeping', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '6 weeks' },
      { name: 'Yoghurt Making', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '6 weeks' },
      { name: 'Welding and Fabrication', minimumGrade: 'N/A', examiningBody: cdacc_exam_body, duration: '3 months' }
    ]
  }
]
