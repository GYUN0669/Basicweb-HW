using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Object_Collision : MonoBehaviour
{
    float speed = 1.0f; //스피드
    float power = 100.0f; // 파워
    public GameObject ball; //GameObject ball 변수 선언

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
     
    }

    void OnCollisionEnter(Collision collided)
    {
        float distance_per_frmae = speed * Time.deltaTime; //프레임 당 거리 선언
        float vertical_input = Input.GetAxis("Vertical");
        float horizontal_input = Input.GetAxis("Horizontal");
        Vector3 launch_direction = new Vector3(0, 1, 1); // y축 1, z축 1 방향으로 발사방향 설정

        transform.Translate(Vector3.forward * vertical_input * distance_per_frmae);
        transform.Translate(Vector3.right * horizontal_input * distance_per_frmae);
        ball.GetComponent<Rigidbody>().AddForce(launch_direction * power); // 지면에 닿을 경우 설정한 발사방향으로 파워만큼 이동

        this.GetComponent<AudioSource>().Play();
        Debug.Log(collided.gameObject.name);

    }
}
