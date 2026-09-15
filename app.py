import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="AI Hostel Finder — Cohort 11 Mid-Term Hackathon",
    page_icon="🏠",
    layout="wide",
)

# Hide Streamlit's default top padding/menu so the embedded app looks native
st.markdown(
    """
    <style>
    .block-container { padding-top: 0rem; padding-bottom: 0rem; max-width: 100% !important; }
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    iframe { border: none; }
    </style>
    """,
    unsafe_allow_html=True,
)

with open("bundled_app.html", "r", encoding="utf-8") as f:
    html_content = f.read()

# height is generous so the whole page (hero + results grid) is visible without
# an inner scrollbar; scrolling=True lets the person scroll the embedded page
# if their screen is smaller than this.
components.html(html_content, height=2400, scrolling=True)
