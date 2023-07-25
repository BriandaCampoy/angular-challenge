import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

/**
 * DateFormaterPipe is a custom pipe used to format a date string into a specified format.
 */
@Pipe({
  name: 'dateFormater',
})
export class DateFormaterPipe implements PipeTransform {
  /**
   * Transforms a date string into the specified format.
   *
   * @param value The date string to be formatted.
   * @returns The formatted date string in the format 'dd MMMM yyyy', or 'N/A' if the input value is not a valid date.
   */
  transform(value: string): string {
    const datePipe: DatePipe = new DatePipe('en-US');
    // Convert the date string to a Date object.
    const dateObj = new Date(value);

    // Check if the date is valid before formatting.
    if (isNaN(dateObj.getTime())) {
      // If the date is not valid, return 'N/A' as the formatted value.
      return 'N/A';
    }
    // Format the date using the specified format.
    const formatted = datePipe.transform(dateObj, 'dd MMMM yyyy');
    // Return the formatted date string.
    return formatted != null ? formatted : 'sf';
  }
}
