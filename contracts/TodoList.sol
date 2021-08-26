pragma solidity ^0.5.0;

//declare version of solidity we want to use

contract TodoList {
    uint256 public taskCount = 0;
    //state variable that belongs on the blockchain

    struct Task {
        uint256 id;
        string content;
        bool completed;
    }

    mapping(uint256 => Task) public tasks;

    constructor() public {
        createTask("Check out my neat PC");
        //create initial task
    }

    function createTask(string memory _content) public {
        taskCount++;
        //add to task count every time function runs
        tasks[taskCount] = Task(taskCount, _content, false);
        //populate tasks by creating new tasks with attributes defined in struct
    }
}
