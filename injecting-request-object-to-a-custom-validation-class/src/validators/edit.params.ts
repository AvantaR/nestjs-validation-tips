import { IsUserComment } from 'src/validators/is.user.comment.validator';

export class EditParams {
  @IsUserComment()
  commentId: number;
}