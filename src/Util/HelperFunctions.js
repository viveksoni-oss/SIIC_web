import { programsData } from "../data/ProgramsData";

// Helper function to calculate days left until deadline
export const calculateDaysLeft = (deadlineDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day

  const deadline = new Date(deadlineDate);
  deadline.setHours(0, 0, 0, 0); // Reset time to start of day

  const diffTime = deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays > 0 ? diffDays : 0;
};

// Helper function to check if program deadline has passed
export const hasDeadlinePassed = (deadlineDate) => {
  return calculateDaysLeft(deadlineDate) === 0;
};

// Helper function to get programs with auto status update
export const getProgramsByType = (type) => {
  return programsData
    .map((program) => {
      // Auto-update status if deadline has passed for Active programs
      if (
        program.type === "Active" &&
        program.deadline &&
        hasDeadlinePassed(program.deadline)
      ) {
        return { ...program, type: "Past" };
      }
      // Auto-update Upcoming to Active if start date has arrived and deadline hasn't passed
      if (program.type === "Upcoming" && program.startDate) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const start = new Date(program.startDate);
        start.setHours(0, 0, 0, 0);

        if (
          today >= start &&
          (!program.deadline || !hasDeadlinePassed(program.deadline))
        ) {
          return { ...program, type: "Active" };
        }
      }
      return program;
    })
    .filter((program) => program.type === type);
};

// Helper function to get all programs with auto status update
export const getUpdatedPrograms = () => {
  return programsData.map((program) => {
    // Auto-update status if deadline has passed for Active programs
    if (
      program.type === "Active" &&
      program.deadline &&
      hasDeadlinePassed(program.deadline)
    ) {
      return { ...program, type: "Past" };
    }
    // Auto-update Upcoming to Active if start date has arrived
    if (program.type === "Upcoming" && program.startDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const start = new Date(program.startDate);
      start.setHours(0, 0, 0, 0);

      if (
        today >= start &&
        (!program.deadline || !hasDeadlinePassed(program.deadline))
      ) {
        return { ...program, type: "Active" };
      }
    }
    return program;
  });
};

// Helper function to get program by slug with auto status update
export const getProgramBySlug = (slug) => {
  const program = programsData.find((program) => program.slug === slug);

  if (!program) return null;

  // Auto-update status if deadline has passed for Active programs
  if (
    program.type === "Active" &&
    program.deadline &&
    hasDeadlinePassed(program.deadline)
  ) {
    return { ...program, type: "Past" };
  }

  // Auto-update Upcoming to Active if start date has arrived
  if (program.type === "Upcoming" && program.startDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(program.startDate);
    start.setHours(0, 0, 0, 0);

    if (
      today >= start &&
      (!program.deadline || !hasDeadlinePassed(program.deadline))
    ) {
      return { ...program, type: "Active" };
    }
  }

  return program;
};
