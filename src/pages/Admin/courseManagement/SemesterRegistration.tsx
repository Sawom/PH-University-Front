import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Button, Col, Flex } from 'antd';
import { toast } from 'sonner';
import { useAddRegisteredSemesterMutation } from '../../../redux/Features/admin/courseManagement';
import { useGetAllSemestersQuery } from '../../../redux/Features/admin/academicManagement.api';
import { TResponse } from '../../../types';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHInput from '../../../components/form/PHInput';
import { semesterStatusOptions } from '../../../constants/semester';


const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: 'sort', value: 'year' },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Semester created', { id: toastId });
      }
    } catch (err) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />

          <PHSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <PHDatePicker name="startDate" label="Start Date" />
          <PHDatePicker name="endDate" label="End Date" />
          <PHInput type="text" name="minCredit" label="Min Credit" />
          <PHInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;