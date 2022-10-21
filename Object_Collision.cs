using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Object_Collision : MonoBehaviour
{
    float speed = 1.0f; //���ǵ�
    float power = 100.0f; // �Ŀ�
    public GameObject ball; //GameObject ball ���� ����

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
        float distance_per_frmae = speed * Time.deltaTime; //������ �� �Ÿ� ����
        float vertical_input = Input.GetAxis("Vertical");
        float horizontal_input = Input.GetAxis("Horizontal");
        Vector3 launch_direction = new Vector3(0, 1, 1); // y�� 1, z�� 1 �������� �߻���� ����

        transform.Translate(Vector3.forward * vertical_input * distance_per_frmae);
        transform.Translate(Vector3.right * horizontal_input * distance_per_frmae);
        ball.GetComponent<Rigidbody>().AddForce(launch_direction * power); // ���鿡 ���� ��� ������ �߻�������� �Ŀ���ŭ �̵�

        this.GetComponent<AudioSource>().Play();
        Debug.Log(collided.gameObject.name);

    }
}
