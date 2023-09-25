import DisperseForm from '../components/disperse/Form';
import DisperseError from '../components/disperse/Error';
import { useDisperse } from '../utils/useDisperse';

const Disperse = () => {
  const { tokenList, setTokenList, submit, keepFirst, combineBalance } =
    useDisperse();

  return (
    <div className="py-8 space-y-8">
      <DisperseForm
        tokenList={tokenList}
        setTokenList={setTokenList}
        submit={submit}
      />
      <DisperseError keepFirst={keepFirst} combineBalance={combineBalance} />
    </div>
  );
};

export default Disperse;
