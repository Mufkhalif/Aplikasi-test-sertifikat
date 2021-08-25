export const ReminderRow = () => (
  <div className="flex flex-row justify-between my-4 mb-6">
    <div>
      <label className="inline-flex items-center">
        <input type="checkbox" className="form-checkbox text-primaryOrange" />
        <span className="text-primaryDark font-normal text-xs ml-2">
          Ingatkan saya
        </span>
      </label>
    </div>
    <p className="text-primaryOrange font-normal text-xs underline">
      Lupa password
    </p>
  </div>
);
