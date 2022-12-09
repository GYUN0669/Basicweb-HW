using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RoosterGenerator : MonoBehaviour
{
    public GameObject rangeObject;
    BoxCollider rangeCollider;
    public GameObject capsul;

    private void Start()
    {
        StartCoroutine(RandomRespawn_Coroutine());
    }

    IEnumerator RandomRespawn_Coroutine()
    {
        while (true)
        {
            yield return new WaitForSeconds(1f);

            // ���� ��ġ �κп� ������ ���� �Լ� Return_RandomPosition() �Լ� ����
            GameObject instantCapsul = Instantiate(capsul, Return_RandomPosition(), Quaternion.identity);
        }
    }

    private void Awake()
    {
        rangeCollider = rangeObject.GetComponent<BoxCollider>();
    }

    Vector3 Return_RandomPosition()
    {
        Vector3 originPosition = rangeObject.transform.position;
        // �ݶ��̴��� ����� �������� bound.size ���
        float range_X = rangeCollider.bounds.size.x;

        range_X = Random.Range((range_X / 2) * -1, range_X / 2);
        Vector3 RandomPostion = new Vector3(range_X, 0f, 0f);

        Vector3 respawnPosition = originPosition + RandomPostion;
        return respawnPosition;
    }
}
