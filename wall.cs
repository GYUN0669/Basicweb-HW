using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class wall : MonoBehaviour
{
    public float speed = -5;

    // Start is called before the first frame update
    void Start()
    {
        Destroy(gameObject, 5.0f);
        transform.Translate(Random.Range(-6.0f, -4.0f) * Time.deltaTime, Random.Range(-3.0f,4.0f), 0); // ���� ������ ���� ����
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(Random.Range(-6.0f,-4.0f) * Time.deltaTime, 0, 0); // ������ �ٰ����� �ӵ��� �����ϰ� ����
    }
}
