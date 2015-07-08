var Model = function(data) {    
    for (var prop in data) {
        this[prop] = data[prop];
    }
};

var Controller = function(data) {   
    for (var prop in data) {
        this[prop] = data[prop];
    }
   
    var element = document.getElementById(this.elementId);
    
    element.innerHTML = this.render();
    
    
    this.model_check = function() {
        if (this.model.changed) {
            element.innerHTML = this.render();
            this.model.changed = false;
        }
    }
    
    var this_model = this;
    
    setInterval(function() {
        this_model.model_check();
    }, 100);
    
    
    var set_handlers = function(e) {
        var handler = this_model.clickHandlers["#" + e.target.id];
        if (handler) {
            this_model[handler]();
        }
    }
    element.addEventListener("click", set_handlers);
};




var Student = new Model({
    name: 'Piotr',
    age: 22,
    year: 5,
    examsTaken: 2,
    takeExam: function(){
        this.examsTaken++;
        this.changed = true;
    }
});


var StudentController = new Controller({
    model: Student,
    elementId: 'student-container',
    render: function(){
        return '<span>' + this.model.name + '</span><button id="student-exams-button">Increase exams taken</button>';
    },
    clickHandlers: {
        '#student-exams-button': 'updateExams'
    },
    updateExams: function(){
        this.model.takeExam();
    }
});


