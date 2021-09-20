import { Controller, Param, Patch } from '@nestjs/common';
import { InjectUserToParam } from 'src/decorators/inject.user.decorator';
import { EditParams } from 'src/validators/edit.params';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Patch('/edit/:commentId')
  @InjectUserToParam()
  edit(@Param() params: EditParams): string {
    return 'Edit action';
  }
}
