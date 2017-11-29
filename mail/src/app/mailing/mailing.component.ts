import { Component, OnInit } from '@angular/core';
import {Email} from './email';
@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {
  title: string;
  emails: Array<Email>

  constructor() { }

  ngOnInit() {
    this.title = "Dojo Mail";
    this.emails = [
      {
        eAddress: "dn@this.com",
        important: false,
        subject: "What?",
        content: "No"
      },
      {
        eAddress: "aw@this.com",
        important: false,
        subject: "1, 2, 3",
        content: "3...1...2. No, 1...3...2. Or...3...2...1."
      },
      {
        eAddress: "jb@this.com",
        important: true,
        subject: "Answers",
        content: "All the answers..."
      },
      {
        eAddress: "rb@this.com",
        important: true,
        subject: "Questions",
        content: "All the questions..."
      },
    ]
  }

}

// eAddress: string;
// important: boolean;
// subject: string;
// content: string;