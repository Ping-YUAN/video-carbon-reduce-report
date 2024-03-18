import { Injectable } from '@nestjs/common';
import { ReportItem } from '@video-carbon-reduce-report/shared';
import * as fs from 'fs';
// import { VideoCarbonData } from '@video-carbon-reduce-report/shared';
/**
 * In production, we should here to connect to a database.
 */
@Injectable()
export class AppService {
  private _data; //: VideoCarbonData;

  getData() {
    if (!this._data) {
      this._readDbData();
    }

    return this._data;
  }

  saveReport(report: ReportItem) {
    this._data.report.push(report);
  }

  _readDbData() {
    try {
      const dbPath = `${__dirname}/assets/db.json`;
      const fileContent = fs.readFileSync(dbPath, 'utf-8');
      this._data = this.formatData(JSON.parse(fileContent));
    } catch (err) {
      throw new Error(`Error reading JSON file: ${err.message}`);
    }
  }

  formatData(data: any) {
    //: VideoCarbonData {
    return {
      reports: data.rapport,
      videos: data.videos,
    };
  }
}
