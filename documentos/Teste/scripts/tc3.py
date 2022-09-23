from selenium import webdriver
from selenium.webdriver import Firefox
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from webdriver_manager.firefox import GeckoDriverManager

import time


driver = webdriver.Firefox(executable_path=GeckoDriverManager().install())
driver.get('http://localhost:3000/admin/professores')


time.sleep(5)

try:
    driver.find_element("xpath", "//p[text()='Cadastre um professor no botão Cadastrar!']")
    print("Nenhum professor cadastrado ou erro ao carregar a lista")
except:
    print("Tabela de professores encontrada!")

driver.quit()