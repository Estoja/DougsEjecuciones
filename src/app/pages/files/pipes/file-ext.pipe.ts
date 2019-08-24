import { Pipe, PipeTransform } from '@angular/core';

const allowed_extension = ['acc', 'ae', 'ai', 'an', 'avi', 'bmp', 'csv', 'dat', 'dgn', 'doc', 'doch',
                      'docm', 'docx', 'doth', 'dw', 'dwfx', 'dwg', 'dxf', 'dxl', 'eml', 'eps',
                      'f4a', 'f4v', '', 'flv', 'fs', 'gif', 'html', 'ind', 'jpeg', 'jpg', 'jpp',
                      'log', 'lr', 'm4v', 'mbox', 'mdb', 'midi', 'mkv', 'mov', 'mp3', 'mp4',
                      'mpeg', 'mpg', 'mpp', 'mpt', 'mpw', 'mpx', 'msg', 'ods', 'oga', 'ogg',
                      'ogv', 'one', 'ost', 'pdf', 'php', 'png', 'pot', 'poth', 'potm', 'potx',
                      'pps', 'ppsx', 'ppt', 'ppth', 'pptm', 'pptx', 'prem', 'ps', 'psd', 'pst',
                      'pub', 'pubm', 'push', 'pwz', 'read', 'rp', 'rtf', 'sql', 'svg', 'swf',
                      'tif', 'tiff', 'txt', 'url', 'vcf', 'vdx', 'vob', 'vsd', 'vss', 'vst',
                      'vsx', 'vtx', 'wav', 'wdp', 'webm', 'wma', 'wmv', 'xd', 'xls', 'xlsm',
                      'xlsx', 'xml', 'zip'];

@Pipe({
  name: 'fileExt'
})
export class FileExtPipe implements PipeTransform {

  transform(value: string): string {
    const values = value.split('.');
    let extension = values.length > 1 ? values[values.length - 1].toLowerCase() : 'file';
    extension = allowed_extension.includes(extension) ? extension : 'file';

    return extension;
  }
}
