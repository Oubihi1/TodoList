// Sélectionner les éléments du DOM
const newTask = document.getElementById("new-task");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Écrire une fonction pour ajouter une nouvelle tâche à la liste
function addNewTask() {
  // Récupérer le texte de la tâche
  const taskText = newTask.value;
  // Vérifier si le texte n'est pas vide
  if (taskText) {
    // Créer un nouvel élément li
    const li = document.createElement("li");
    // Créer un élément span pour le texte de la tâche
    const span = document.createElement("span");
    // Créer un élément button pour le bouton de suppression
    const deleteButton = document.createElement("button");
    // Créer un élément button pour le bouton de modification
    const editButton = document.createElement("button");
    // Ajouter le texte de la tâche au span
    span.textContent = taskText;
    // Ajouter le symbole X au bouton de suppression
    deleteButton.textContent = "X";
    // Ajouter le symbole du crayon au bouton de modification
    editButton.textContent = "✏️";
    // Ajouter le span et les boutons au li
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    // Ajouter le li à la liste des tâches
    taskList.appendChild(li);
    // Vider le champ de saisie
    newTask.value = "";
    // Ajouter un écouteur d'événement au li pour marquer la tâche comme terminée
    li.addEventListener("click", function() {
      // Basculer la classe done sur le li
      li.classList.toggle("done");
    });
    // Ajouter un écouteur d'événement au bouton de suppression pour supprimer la tâche de la liste
    deleteButton.addEventListener("click", function() {
      // Supprimer le li de la liste des tâches
      taskList.removeChild(li);
    });
    // Ajouter un écouteur d'événement au bouton de modification pour modifier le texte de la tâche
    editButton.addEventListener("click", function() {
      // Demander le nouveau texte de la tâche à l'utilisateur
      const newText = prompt("Entrez le nouveau texte de la tâche", span.textContent);
      // Vérifier si le texte n'est pas vide ou null
      if (newText && newText !== span.textContent) {
        // Remplacer le texte de la tâche par le nouveau texte
        span.textContent = newText;
      }
    });
  }
}

// Ajouter un écouteur d'événement au bouton d'ajout pour appeler la fonction addNewTask
addTask.addEventListener("click", addNewTask);
