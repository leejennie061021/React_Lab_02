# AI Usage Report

**Student Name:** Rauli

**Date:** 17.04.2026



1. **Tool Used:** Google Gemini

2. **Prompts Used:** - "How to properly structure and type a FlatList in React Native with mock data?"

   - "How to handle KeyboardAvoidingView across iOS and Android?"

3. **How I modified/verified the code:** I set up the Expo project manually and verified that `KeyboardAvoidingView` logic correctly dismisses on tap, and FlatList uses `getItemLayout`.

4. **What I learned:** FlatList virtualization (`initialNumToRender`) significantly prevents memory spikes compared to ScrollView for large datasets. I also learned how to manage regex validation dynamically in state.