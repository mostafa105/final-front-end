import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { UserDataService } from "src/app/services/user-data.service";
import Swal from "sweetalert2";
import { Question } from "../classes/exam";
import { TestService } from "../services/test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  answers: number[] = [];
  test: Question[] = [];
isSubmited :boolean= false
  verifiedSubtracks: any;
  unVerifiedSubtracks: any;
  currentanswers: { qu: number; ans: number }[] = [];
  constructor(
    private testService: TestService,
    private userDataService: UserDataService
  ) {}
  isAnswered(index: number): boolean {
    if (this.currentanswers.find((a) => a.qu == index) == undefined) {
      return true;
    } else {
      return false;
    }
  }
  choose(index: number, answerId: number) {
    if (this.currentanswers.find((a) => a.qu == index) == undefined) {
      //qu is not found
      this.currentanswers.push({ qu: index, ans: answerId });
    } else {
      this.currentanswers.forEach((a) => {
        if (a.qu == index) {
          a.ans = answerId;
        }
      });
    }
    console.log(this.currentanswers);
  }

  //getTest    //subtrack id/////////////////////////////////here////
  getTest(subtrackId: number) {
    this.testService.getTest(subtrackId).subscribe((response) => {
      this.test = response.test;
      console.log(this.test);
    });
  }

  //verifiedSubtracks
  getVerifiedSubtracks() {
    this.testService
      .getVerifiedSubtracks(this.userDataService.id())
      .subscribe((response) => {
        console.log(response);
        this.verifiedSubtracks = response.data;
      });
  }

  //unVerifiedSubtracks
  getUnverifiedSubtracks() {
    this.testService
      .getUnverifiedSubtracks(this.userDataService.id())
      .subscribe((response) => {
        console.log(response);
        this.unVerifiedSubtracks = response.data;
      });
  }

  //send Answers
  sendAnswers() {
    this.isSubmited = true
    this.answers = this.currentanswers.map((a) => a.ans);
    if (this.answers.length < this.test.length) {
      return;
    } else {
      // console.log(this.answers)
      this.testService.sendAnswer(this.answers).subscribe((response) => {
        console.log(response);
        this.swalAlert(Math.round(response.percentage));
      });
    }
  }

  // timer

  ngOnInit(): void {
    this.getUnverifiedSubtracks();
    this.getVerifiedSubtracks();
    this.getTest(2);
    //
  }
  ////////////////////

  swalAlert(score: any) {
    Swal.fire({
      title: `your score is ${score}%`,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff ",
      backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    });
  }
}
