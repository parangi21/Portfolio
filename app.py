import streamlit as st

st.set_page_config(
    page_title="Parangi Portfolio",
    layout="wide"
)

html_file = open("index.html", "r", encoding="utf-8")
source_code = html_file.read()

st.components.v1.html(source_code, height=5000, scrolling=True)