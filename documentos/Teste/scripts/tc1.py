from selenium.webdriver import Firefox
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options

import time

options=Options()
service = Service(r'./geckodriver')

driver = Firefox(service=service, options=options)
driver.get('http://localhost:3000/admin/departamentos')

time.sleep(2)

driver.find_element("xpath", "//button[text()='Cadastrar']").click()

time.sleep(2)

driver.find_element("id","nome").send_keys('Teste Departamento')
time.sleep(1)
driver.find_element("id","sigla").send_keys('DTT')

time.sleep(2)

driver.find_element("xpath", "//button[text()='Salvar']").click()

time.sleep(8)

try:
    driver.find_element("xpath", "//div[text()='Teste Departamento']")
    print("Teste completado")
except:
    print("Teste falhou")
    
driver.quit()