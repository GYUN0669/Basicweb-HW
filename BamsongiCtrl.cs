using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BamsongiCtrl : MonoBehaviour
{
    public static float timer = 0.0f;
    bool is_shot = false;
    public static bool hit = false;
    public static float distance = 0.0f;
    public static int score = 0;
    // Start is called before the first frame update
    void Start()
    {
        timer = 0;
        score = 0;
    }

    // Update is called once per frame
    void Update()
    {
        timer += Time.deltaTime;

        if (is_shot == true)
        {
            GetComponent<Rigidbody>().AddForce(BamsongiGenerator.wind); // 던지는 시점 부터 밤송이에 영향
        }
        if (Input.GetMouseButtonDown(0))
        {
            Destroy(this.gameObject);
        }
    }
    public void Shoot(Vector3 dir)
    {
        GetComponent<Rigidbody>().AddForce(dir);
        is_shot = true;
    }
    
    void OnCollisionEnter(Collision other)
    {
        GetComponent<Rigidbody>().isKinematic = true;
        GetComponent<ParticleSystem>().Play();
        Vector3 collided_position = transform.position;
        float distance = collided_position.x * collided_position.x + (collided_position.y - 6.5f) * (collided_position.y - 6.5f);
        distance = Mathf.Sqrt(distance);
        Destroy(this.gameObject,3f); // 충돌시 3초뒤 파괴

        if (distance >= 0.0f && distance <= 0.4) // 거리별 점수
            score = 100;
        else if (distance <= 0.8f)
            score = 80;
        else if (distance <= 1.2f)
            score = 60;
        else if (distance <= 1.6f)
            score = 40;
        else if (distance <= 2.0f)
            score = 20;
        else
            score = 0;
    }
}
