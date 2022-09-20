from selenium.webdriver import Firefox
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options

import time

options=Options()
service = Service(r'./geckodriver')

driver = Firefox(service=service, options=options)
driver.get('http://localhost:3000/admin/departamentos')


time.sleep(5)

try:
    driver.find_element("xpath", "//p[text()='Cadastre um departamento no botão Cadastrar!']")
except:
    divsAntes = driver.find_elements("class name", "text-danger")
    time.sleep(2)
    divsAntes[0].click()
    time.sleep(2)
    driver.find_element("xpath", "//button[text()='Excluir']").click()

    time.sleep(3)

    divsDepois = driver.find_elements("class name", "text-danger")
    if(len(divsAntes) > len(divsDepois)):
        print("Departamento removido com sucesso")
    else:
        print("Ocorreu algum erro ao remover o departamento")

driver.quit()
    
