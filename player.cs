using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class player : MonoBehaviour
{
    public float jump_power=0;
    private float time=0; // �ð� ���� ����
    public Texture2D icon = null;

    // Start is called before the first frame update
    void Start()
    {
        jump_power = Random.Range(4.0f, 9.0f); //�����Ҷ����� ������ ���� ����
    }

    // Update is called once per frame
    void Update()
    {
       // if (Input.GetButtonDown("Jump"))
        //    GetComponent<Rigidbody>().velocity = new Vector3(0, jump_power, 0); 

        if(Input.GetButton("Jump"))
            GetComponent<Rigidbody>().velocity = new Vector3(0, jump_power, 0); // �� ������ �������� ������ �ǰ� ������

        time += Time.deltaTime; // �ð�
    }

    void OnCollisionEnter(Collision other)
    {
        Debug.Log("Hello");
        SceneManager.LoadScene("main_scene");
    }
    void OnGUI()
    {
        GUI.DrawTexture(new Rect(0, Screen.height - 64, 64, 64), icon );
        GUI.Label(new Rect(81, Screen.height - 40, 128, 32), time.ToString()); // ���� ���� �ð��� ǥ������.
        GUI.Label(new Rect(81, Screen.height - 80, 128, 72), jump_power.ToString()); // ���� ���۽� �������� ǥ������.
    }
}
