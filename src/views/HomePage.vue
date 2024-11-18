<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="ion-text-center custom-title">
          <span class="title-text">Home</span>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="content-container">
        <!-- Content Section -->
        <div class="welcome-section">
          <h2 class="welcome-text">Welcome Back!</h2>
          <p class="subtitle">What would you like to do today?</p>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions">
          <ion-card class="action-card">
            <ion-card-content>
              <ion-icon :icon="documentText" class="card-icon"></ion-icon>
              <span>My Tasks</span>
            </ion-card-content>
          </ion-card>

          <ion-card class="action-card">
            <ion-card-content>
              <ion-icon :icon="calendar" class="card-icon"></ion-icon>
              <span>Schedule</span>
            </ion-card-content>
          </ion-card>
        </div>
      </div>

      <TabsMenu />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon } from "@ionic/vue";
import { documentText, calendar } from "ionicons/icons";
import TabsMenu from "@/components/TabsMenu.vue";
</script>

<style scoped>
.custom-title {
  padding: 15px 0;
}

.title-text {
  font-weight: 600;
  font-size: 1.2rem;
  color: #333;
}

.content-container {
  padding: 20px;
}

.welcome-section {
  margin-bottom: 30px;
}

.welcome-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
}

.subtitle {
  color: #666;
  font-size: 1rem;
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.action-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.action-card:active {
  transform: scale(0.98);
}

ion-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
}

.card-icon {
  font-size: 24px;
  color: #3880ff;
}

/* Custom scrollbar */
ion-content::part(scroll) {
  scrollbar-width: thin;
  scrollbar-color: #bbb transparent;
}

ion-content::part(scroll)::-webkit-scrollbar {
  width: 6px;
}

ion-content::part(scroll)::-webkit-scrollbar-thumb {
  background-color: #bbb;
  border-radius: 3px;
}
</style>
