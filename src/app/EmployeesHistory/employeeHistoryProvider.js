import EmployeeSummaryModel from './Models/employeeSummaryModel';
import ProjectTimelineModel from './Models/projectTimelineModel';
import EvaluationDetailsModel from './Models/evaluationDetailsModel';

class EmployeeHistoryProvider {
  static getEmployeeSummaryModel() {
    return new EmployeeSummaryModel(
      new Date(2017, 7, 12),
      ['Java', '.Net'],
      ['travelling', 'cooking', 'reading'],
      ['Project1', 'Project2', 'Prtoject3']
    );
  }

  static getProjectsTimeline() {
    return [
      new ProjectTimelineModel('Project1', '12.04.2015', '20.10.2016'),
      new ProjectTimelineModel('Project2', '20.11.2016', '21.06.2017')
    ];
  }

  static getEvaluations() {
    return [
      new EvaluationDetailsModel(
        '11.2015',
        'Needs to improve front-end skills'
      ),
      new EvaluationDetailsModel('11.2016', 'Promoted to TD2')
    ];
  }

  static getFormatedDate(date) {
    return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
  }
}

export default EmployeeHistoryProvider;
