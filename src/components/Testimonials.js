import React from "react";

export const Testimonials = () => {
  return (
    <div className="custom-margin custom-margin-bottom">
      <div>
        <div class="flex justify-center content-center gap-20">
          <div class="width-1/3">
            <div className="card-testimonial">
              <div className="content">
                <p className="italic">
                  "This course provided me with a structured approach to learning
                  the fundamentals. The clear explanations and interactive
                  lessons helped me grasp key concepts quickly. I'm now
                  confident in my ability to play and even strategize
                  effectively. Highly recommended for anyone looking to start
                  their chess journey!"
                </p>{" "}
                <p className="text-right">- Emily S.</p>
              </div>
            </div>
          </div>
          <div class="width-1/3">
            <div className="card-testimonial">
              <div className="content">
                <p className="italic">
                "The personalized feedback from the instructor was invaluable in identifying and correcting my weaknesses. I've seen a noticeable improvement in my gameplay and feel more confident facing stronger opponents. This course is a must for anyone serious about improving their chess skills."
                </p>{" "}
                <p className="text-right">- Michael R.</p>
              </div>
            </div>
          </div>
          <div class="width-1/3">
            <div className="card-testimonial">
              <div className="content">
                <p className="italic">
                "The lessons are designed to be interactive and age-appropriate, making learning chess enjoyable for my son. I've been amazed at how quickly he's picked up the basics and developed a genuine interest in the game. I highly recommend this course to other parents looking to introduce their children to the world of chess." 


                </p>{" "}
                <p className="text-right">- Sarah L.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
