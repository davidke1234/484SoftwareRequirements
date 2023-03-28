import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  @ViewChild('conversationPane') conversationPane: ElementRef | undefined;
  
  showModal: boolean = false;
  iterator: number = 0;
  conversations: any[] = [{
      message: 'Hi Zen, we are at the CUB, where do you want to go first?',
      isVisible: true,
      isSent: false
    },
    {
      message: 'Senior Ball Room',
      isVisible: true,
      isSent: true
    },
    {
      message: 'Identifying path to Senior Ball Room, from North Entrance of CUB.',
      isVisible: false,
      isSent: false
    },
    {
      message: 'Are you ready to begin?',
      isVisible: false,
      isSent: false
    },
    {
      message: `Yes. Let's go.`,
      isVisible: false,
      isSent: true
    },
    {
      message: 'Great! Take 3 teps forward to enter the CLUB.',
      isVisible: false,
      isSent: false
    },
    {
      message: 'Now turn right, and take 30 paces forward',
      isVisible: false,
      isSent: false
    },
    {
      message: 'Slow down. You are only 2 paces away from the eleavtor.',
      isVisible: false,
      isSent: false
    },
    {
      message: 'Alright make a right turn to the elevator. And head to the second floor. Say "go" when you leave the elevator',
      isVisible: false,
      isSent: false
    },
    {
      message: 'Go',
      isVisible: false,
      isSent: true
    },
    {
      message: 'Make a left turn and take 10 paces forward. The Senior ball room is on your right.',
      isVisible: false,
      isSent: false
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
    let load = 2;
    let a = [2,3,4]
    const interval = setInterval(() => {
      load = a[Math.floor(Math.random() * a.length)]
      if (this.iterator < this.conversations.length) {
        this.conversations[this.iterator].isVisible = true;
        this.iterator++;
        setTimeout(() => {
          if (this.conversationPane) {
            this.conversationPane.nativeElement.scrollTop = this.conversationPane.nativeElement.scrollHeight;
          }
        }, load*1000)
      } else {
        clearInterval(interval);
      }
    }, 2500); // Change this based on the required speed
  }

}
