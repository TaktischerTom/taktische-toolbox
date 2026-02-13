import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-hsr-character-countdown',
  imports: [],
  templateUrl: './hsr-character-countdown.component.html',
})
export class HsrCharacterCountdownComponent implements OnInit {
  private readonly releaseTime: number = 1774321200
  public remainingTime: Date = new Date(this.releaseTime)

  public ngOnInit(): void {
    setInterval(() => this.calculateRemainingTime(), 1000)
  }

  private calculateRemainingTime(): void {
    const now = new Date()
    this.remainingTime = new Date(now.getTime() - this.releaseTime)

    console.log(this.remainingTime)
  }
}
