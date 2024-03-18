import { Pipe } from '@angular/core';
import { PipeTransform } from '@nestjs/common';

export const FILE_SIZE_SCALE = 1024;

@Pipe({ name: 'fileSize', standalone: true })
export class FileSizePipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (!value) return '';
    if (value < FILE_SIZE_SCALE) {
      return `${value}K`;
    }
    const mb = Math.round(value / 1024);
    if (mb < FILE_SIZE_SCALE) {
      return `${mb}M`;
    }
    const gb = Math.round(mb / 1024);
    return `${gb}G`;
  }
}
