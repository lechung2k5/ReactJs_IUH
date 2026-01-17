import Button from '../components/Button';

const ButtonPage = () => {
  return (
    <div className="page-content">
      <h2>Bài 2: Button Components</h2>
      <div className="button-group">
        <Button type="primary">Primary Button</Button>
        <Button type="danger">Danger Button</Button>
        <Button type="success">Success Button</Button>
      </div>
    </div>
  );
};
export default ButtonPage;