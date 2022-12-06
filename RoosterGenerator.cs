using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RoosterGenerator : MonoBehaviour
{
    private float currTime;
    public GameObject Monster;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        currTime += Time.deltaTime;
        if (currTime > 5)
        {
            // x,y,z ��ǥ���� ���� �ٸ� �������� �����ϰ� ���������� �������.
            float newX = Random.Range(-3f, 3f), newZ = Random.Range(0f, 5f);

            // ������ ������Ʈ�� �ҷ��´�.
            GameObject monster = Instantiate(Monster);

            // �ҷ��� ������Ʈ�� �����ϰ� ������ ��ǥ������ ��ġ�� �ű��.
            Monster.transform.position = new Vector3(newX, 0, newZ);

            // �ð��� 0���� �ǵ����ָ�, 5�ʸ��� �ݺ��ȴ�.
            currTime = 0;
        }
    }
}
