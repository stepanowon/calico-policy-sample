# Calico Network Policy 예제
---
### backend-web
* 백엔드 예제
* 미리 docker image build 되어 있음 : stepanowon/backend-web:1.0.0
* k8s-backend.yaml : k8s 클러스터에 deployment, service 등록
  - http://backend-web.default.svc:8080/countries

### frontend-web
* 프론트엔드 예제
* 미리 docker image build 되어 있음 : stepanowon/frontend-web:1.0.0
* 두개의 container
  - http://localhost:8000  : backend-web을 호출하는 프론트엔드 기능
  - http://localhost : nginx 웹서버
* k8s-frontend.yaml : k8s 클러스터에 deployment, service 등록
  - http://backend-web.default.svc:8080/countries 백엔드를 이용함


### calico-policy
* all-deny.yaml
  - 모든 ingress, egress를 허가하지 않음
* backend-policy.yaml
  - app: backend-web 레이블을 가진 Pod로는 app: front-web 레이블을 가진 pod만 접근가능하도록 보안 설정
* frontend-policy.yaml
  - app: frontend-web 레이블을 가진 Pod로는 모든 곳으로부터 8000번 포트로만 액세스 가능하도록 설정

